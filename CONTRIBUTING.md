# Contributing to Instagram Saver Bot

First off, thank you for considering contributing to Instagram Saver Bot! 🎉

## How Can I Contribute?

### Reporting Bugs

If you find a bug, please create an issue with the following information:

- **Use a clear and descriptive title**
- **Describe the exact steps to reproduce the problem**
- **Provide specific examples**
- **Describe the behavior you observed and what you expected**
- **Include screenshots if possible**

### Suggesting Enhancements

If you have an idea for an enhancement:

- **Use a clear and descriptive title**
- **Provide a detailed description of the suggested enhancement**
- **Explain why this enhancement would be useful**

### Pull Requests

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

#### Pull Request Guidelines

- Follow the existing code style
- Write clear, descriptive commit messages
- Update documentation if needed
- Add tests if applicable
- Make sure all tests pass

## Code Style

- Use meaningful variable and function names
- Add comments for complex logic
- Follow JavaScript/Node.js best practices
- Use async/await for asynchronous operations

## Adding New Languages

To add a new language:

1. Open `src/config/languages.js`
2. Add your language code and translations following the existing pattern
3. Make sure all translation keys are included
4. Test the bot with the new language

## Development Setup

```bash
# Clone your fork
git clone https://github.com/yaxyobekuz/insta-saver.git
cd insta-saver

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env

# Edit .env with your credentials

# Run in development mode
npm run dev
```

## Questions?

Feel free to open an issue with your question or reach out to the maintainer.

Thank you for contributing! 🚀
