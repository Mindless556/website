import { motion } from 'framer-motion';

interface QuantitySelectorProps {
  quantity: number;
  onQuantityChange: (quantity: number) => void;
  min?: number;
  max?: number;
}

export default function QuantitySelector({
  quantity,
  onQuantityChange,
  min = 1,
  max = 99,
}: QuantitySelectorProps) {
  const handleIncrement = () => {
    if (quantity < max) {
      onQuantityChange(quantity + 1);
    }
  };

  const handleDecrement = () => {
    if (quantity > min) {
      onQuantityChange(quantity - 1);
    }
  };

  return (
    <div className="flex items-center space-x-4 space-x-reverse">
      <motion.button
        whileTap={{ scale: 0.95 }}
        onClick={handleDecrement}
        className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-300 hover:border-primary transition-colors"
        disabled={quantity <= min}
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20 12H4"
          />
        </svg>
      </motion.button>

      <span className="text-lg font-semibold w-8 text-center">{quantity}</span>

      <motion.button
        whileTap={{ scale: 0.95 }}
        onClick={handleIncrement}
        className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-300 hover:border-primary transition-colors"
        disabled={quantity >= max}
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 4v16m8-8H4"
          />
        </svg>
      </motion.button>
    </div>
  );
} 