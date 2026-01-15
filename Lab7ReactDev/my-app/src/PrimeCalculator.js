import { useMemo, useState } from "react";

function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

function PrimeCalculator() {
  const [number, setNumber] = useState(1000);

  const primeCount = useMemo(() => {
    let count = 0;
    for (let i = 2; i < number; i++) {
      if (isPrime(i)) count++;
    }
    return count;
  }, [number]);

  const handleChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (isNaN(value)) {
      setNumber(0);
    } else {
      setNumber(value);
    }
  };

  return (
    <div>
      <input type="number" value={number} onChange={handleChange} />
      <p>Liczb pierwszych: {primeCount}</p>
    </div>
  );
}

export default PrimeCalculator;
