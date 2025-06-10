# Contributing to Modern E-commerce Website

Thank you for your interest in contributing to our e-commerce platform! This document provides guidelines and instructions for contributing to the project.

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Coding Standards](#coding-standards)
- [Testing Guidelines](#testing-guidelines)
- [Documentation Guidelines](#documentation-guidelines)
- [Pull Request Process](#pull-request-process)
- [Review Process](#review-process)

## 🤝 Code of Conduct

By participating in this project, you agree to abide by our Code of Conduct. Please read it before contributing.

## 🚀 Getting Started

### Prerequisites

- Node.js 20.x or later
- npm 10.x or later
- Git
- MongoDB 6.x or later
- A code editor (VS Code recommended)

### Initial Setup

1. Fork the repository
2. Clone your fork:
   ```bash
   git clone https://github.com/YOUR_USERNAME/website.git
   cd website
   ```
3. Add upstream remote:
   ```bash
   git remote add upstream https://github.com/Mindless556/website.git
   ```
4. Install dependencies:
   ```bash
   npm install
   ```
5. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```

## 💻 Development Workflow

### Branch Naming Convention

- Feature branches: `feature/feature-name`
- Bug fixes: `fix/bug-name`
- Documentation: `docs/description`
- Performance: `perf/description`
- Refactoring: `refactor/description`

### Commit Message Format

Follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

```
<type>(<scope>): <description>

[optional body]

[optional footer]
```

Types:
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes
- `refactor`: Code refactoring
- `perf`: Performance improvements
- `test`: Adding or modifying tests
- `chore`: Maintenance tasks

Example:
```
feat(auth): add social login with Google

- Implement Google OAuth integration
- Add user profile sync
- Update documentation

Closes #123
```

## 📝 Coding Standards

### TypeScript Guidelines

1. **Type Safety**
   - Use strict type checking
   - Avoid `any` type
   - Define interfaces for all data structures
   - Use type guards when necessary

2. **Component Structure**
   ```typescript
   // Component with props interface
   interface ComponentProps {
     prop1: string;
     prop2: number;
   }

   export const Component: React.FC<ComponentProps> = ({ prop1, prop2 }) => {
     // Component logic
   };
   ```

3. **State Management**
   - Use Zustand for global state
   - Use React's useState for local state
   - Implement proper state initialization

### Styling Guidelines

1. **Tailwind CSS**
   - Use utility classes
   - Follow mobile-first approach
   - Maintain consistent spacing
   - Use design tokens for colors

2. **RTL Support**
   - Use RTL-aware utilities
   - Test both LTR and RTL layouts
   - Use logical properties

### Performance Guidelines

1. **Code Splitting**
   - Use dynamic imports
   - Implement route-based splitting
   - Lazy load components

2. **Image Optimization**
   - Use Next.js Image component
   - Implement proper sizing
   - Use appropriate formats

## 🧪 Testing Guidelines

### Unit Tests

1. **Component Testing**
   ```typescript
   import { render, screen } from '@testing-library/react';
   import { Component } from './Component';

   describe('Component', () => {
     it('renders correctly', () => {
       render(<Component prop1="test" prop2={1} />);
       expect(screen.getByText('test')).toBeInTheDocument();
     });
   });
   ```

2. **Hook Testing**
   ```typescript
   import { renderHook, act } from '@testing-library/react-hooks';
   import { useCustomHook } from './useCustomHook';

   describe('useCustomHook', () => {
     it('updates state correctly', () => {
       const { result } = renderHook(() => useCustomHook());
       act(() => {
         result.current.updateState();
       });
       expect(result.current.state).toBe(expectedValue);
     });
   });
   ```

### Integration Tests

1. **API Testing**
   - Test all endpoints
   - Verify error handling
   - Check response formats

2. **E2E Testing**
   - Test critical user flows
   - Verify data persistence
   - Check error scenarios

## 📚 Documentation Guidelines

### Code Documentation

1. **Component Documentation**
   ```typescript
   /**
    * ProductCard component displays a single product with its details
    * @param {Product} product - The product to display
    * @param {boolean} [showActions=true] - Whether to show action buttons
    * @returns {JSX.Element} Rendered component
    */
   ```

2. **Function Documentation**
   ```typescript
   /**
    * Calculates the total price including tax and shipping
    * @param {number} subtotal - The subtotal amount
    * @param {number} taxRate - The tax rate as a decimal
    * @param {number} shippingCost - The shipping cost
    * @returns {number} The total price
    */
   ```

### README Updates

- Update relevant sections
- Add new features
- Update installation steps
- Document breaking changes

## 🔄 Pull Request Process

1. **Before Submitting**
   - Update documentation
   - Add tests
   - Run linter
   - Check formatting
   - Test RTL support

2. **PR Description**
   - Describe changes
   - Link related issues
   - Add screenshots if UI changes
   - List testing performed

3. **Review Checklist**
   - [ ] Tests added/updated
   - [ ] Documentation updated
   - [ ] Code follows standards
   - [ ] RTL support verified
   - [ ] Performance impact considered

## 👀 Review Process

1. **Code Review**
   - Check code quality
   - Verify test coverage
   - Review documentation
   - Check performance impact

2. **Approval Process**
   - At least one approval required
   - All checks must pass
   - No merge conflicts
   - Documentation complete

## 🎯 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
- [React Documentation](https://reactjs.org/docs) 