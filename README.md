# AI Chat Assistant

A modern, responsive chat interface powered by Claude 4 API, built with Next.js 14 and Tailwind CSS. This application provides a Cursor-like chat experience with a clean, professional UI.

## Features

- 🤖 **Claude 4 Integration** - Powered by Anthropic's latest Claude model
- 💬 **Real-time Chat** - Smooth, responsive chat interface
- 🎨 **Modern UI** - Clean, professional design with dark/light mode support
- 📱 **Responsive Design** - Works seamlessly on desktop and mobile
- 📋 **Copy Messages** - Easy copy-to-clipboard functionality
- ⚡ **Fast Performance** - Built with Next.js 14 App Router
- 🔒 **Secure** - API keys handled securely on the server side

## Getting Started

### Prerequisites

- Node.js 18.0 or later
- npm or yarn
- Anthropic API key (Claude 4)

### Installation

1. **Clone or navigate to the project directory:**
   ```bash
   cd ai-chat-app
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   
   Create a `.env.local` file in the root directory and add your Anthropic API key:
   ```bash
   ANTHROPIC_API_KEY=your_claude_api_key_here
   ```

   To get your API key:
   - Go to [Anthropic Console](https://console.anthropic.com/)
   - Sign up or log in
   - Navigate to API Keys section
   - Create a new API key

4. **Run the development server:**
   ```bash
   npm run dev
   ```

5. **Open your browser:**
   
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## Usage

1. **Start a Conversation:** Type your message in the input field at the bottom
2. **Send Message:** Press Enter or click the send button
3. **Copy Responses:** Click the copy icon on any AI response to copy it to clipboard
4. **Scroll Through History:** All messages are saved in the current session

## Project Structure

```
ai-chat-app/
├── app/
│   ├── api/
│   │   └── chat/
│   │       └── route.ts          # Claude API integration
│   ├── globals.css               # Global styles
│   ├── layout.tsx               # Root layout
│   └── page.tsx                 # Main chat interface
├── public/                      # Static assets
├── .env.local                   # Environment variables (create this)
├── package.json
└── README.md
```

## API Configuration

The application uses Claude 3.5 Sonnet by default. You can modify the model and parameters in `app/api/chat/route.ts`:

```typescript
const response = await anthropic.messages.create({
  model: 'claude-3-5-sonnet-20241022', // Change model here
  max_tokens: 4000,                     // Adjust response length
  temperature: 0.7,                     // Control creativity (0-1)
  messages: claudeMessages,
});
```

## Customization

### Styling
- The app uses Tailwind CSS for styling
- Modify colors, spacing, and layout in `app/page.tsx`
- Global styles can be adjusted in `app/globals.css`

### Features
- Add message persistence with a database
- Implement user authentication
- Add file upload capabilities
- Create conversation history
- Add export functionality

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Add your `ANTHROPIC_API_KEY` in the Vercel environment variables
4. Deploy!

### Other Platforms

The app can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- Render

Make sure to set the `ANTHROPIC_API_KEY` environment variable in your deployment platform.

## Troubleshooting

### Common Issues

1. **API Key Error:**
   - Ensure your API key is correctly set in `.env.local`
   - Verify the API key is valid in Anthropic Console

2. **Build Errors:**
   - Run `npm install` to ensure all dependencies are installed
   - Check Node.js version (requires 18.0+)

3. **Styling Issues:**
   - Ensure Tailwind CSS is properly configured
   - Check for any CSS conflicts

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.

## Support

If you encounter any issues or have questions:
1. Check the troubleshooting section above
2. Review the [Anthropic API documentation](https://docs.anthropic.com/)
3. Open an issue in the repository

---

**Built with ❤️ using Next.js and Claude 4**
