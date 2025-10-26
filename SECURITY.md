# Security Policy

## Supported Versions

Currently supported versions with security updates:

| Version | Supported          |
| ------- | ------------------ |
| 1.0.x   | :white_check_mark: |

## Reporting a Vulnerability

If you discover a security vulnerability within Instagram Saver Bot, please send an email to the maintainer. All security vulnerabilities will be promptly addressed.

**Please do not open a public issue for security vulnerabilities.**

### What to include in your report:

- Type of vulnerability
- Full paths of source file(s) related to the vulnerability
- Location of the affected source code (tag/branch/commit or direct URL)
- Any special configuration required to reproduce the issue
- Step-by-step instructions to reproduce the issue
- Proof-of-concept or exploit code (if possible)
- Impact of the issue

### Response Timeline:

- We will acknowledge your email within 48 hours
- We will provide a more detailed response within 7 days
- We will work on a fix and release it as soon as possible
- We will notify you when the vulnerability is fixed

## Security Best Practices

When using this bot:

1. **Never commit your `.env` file** to version control
2. **Keep your MongoDB connection secure** - use authentication and encryption
3. **Keep your Telegram Bot Token secret** - never share it publicly
4. **Regularly update dependencies** to get security patches
5. **Use environment variables** for all sensitive data
6. **Monitor your bot** for unusual activity
7. **Limit bot permissions** to only what's necessary

## Secure Configuration

Example secure `.env` configuration:

```env
# Use strong, unique tokens
TOKEN=your_secure_telegram_bot_token

# Use authenticated MongoDB connection with strong password
MONGODB_URL=mongodb://username:strong_password@host:port/database?authSource=admin

# For production, consider using MongoDB Atlas or similar with SSL/TLS
MONGODB_URL=mongodb+srv://username:password@cluster.mongodb.net/database?retryWrites=true&w=majority
```

## Dependencies Security

We regularly update dependencies to patch security vulnerabilities. You can check for vulnerabilities in your installation:

```bash
npm audit
```

To fix vulnerabilities automatically:

```bash
npm audit fix
```

Thank you for helping keep Instagram Saver Bot secure!
