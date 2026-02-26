# Form Controlled Components - Experiment 1

## Aim
To create and handle forms in a frontend application using controlled components in React with beautiful CSS styling.

## Software Requirements
- Node.js (v16 or higher)
- npm or yarn
- VS Code
- Web Browser (Chrome, Firefox, Safari, Edge)

## Theory
Controlled components are React components in which form data is handled by the component's state. This provides complete control over user input and enables real-time validation and feedback. The form uses React's `useState` hook to manage input values and provides comprehensive form handling.

## Features
✨ **Form Fields Included:**
- First Name (Text Input)
- Last Name (Text Input)
- Date of Birth (Date Picker)
- Gender (Radio Buttons)
- Skills (Checkboxes)
- Address (Text Area)
- State (Dropdown)
- Country (Dropdown)

✨ **Functionality:**
- Real-time form data management with useState hook
- Form submission with data display
- Cancel button to reset form
- Alert popup displaying all submitted form details
- Dynamic display of submitted details below the form
- Responsive design for all screen sizes
- Beautiful modern UI with smooth animations

## Installation

1. **Navigate to the project directory:**
   ```bash
   cd "d:\CU (BE CSE AI ML)\6th sem\FULL_STACK_II\EXPERIMENT_6"
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   The application will automatically open at `http://localhost:3000`

## Project Structure
```
EXPERIMENT_6/
├── src/
│   ├── components/
│   │   └── FormComponent.jsx      # Main form component
│   ├── styles/
│   │   └── FormComponent.css      # Form styling
│   ├── App.jsx                     # Main App component
│   ├── App.css                     # App styling
│   ├── index.css                   # Global styles
│   └── main.jsx                    # Entry point
├── index.html                      # HTML template
├── vite.config.js                  # Vite configuration
├── package.json                    # Project dependencies
└── README.md                        # Documentation
```

## How to Use

1. **Fill the form fields:**
   - Enter your first and last name
   - Select your date of birth
   - Choose your gender
   - Select your skills (can select multiple)
   - Enter your address (optional)
   - Select your state
   - Select your country (optional)

2. **Submit the form:**
   - Click the "Submit" button
   - An alert will appear showing all form details
   - The details will also display below the form

3. **Reset the form:**
   - Click the "Cancel" button to clear all fields

## CSS Features
- 🎨 Modern gradient background
- ✨ Smooth animations and transitions
- 📱 Fully responsive design
- 🎯 Beautiful form controls with hover and focus states
- 🌈 Color-coded buttons (Submit in blue, Cancel in gray)
- 📊 Grid-based layout for details display
- 🔧 CSS variables for easy customization

## Key Technologies
- **React 18**: For component-based UI
- **Vite**: For fast development and bundling
- **CSS3**: For styling and animations
- **JavaScript ES6+**: For modern JavaScript features

## Styling Highlights
- Gradient background (Purple theme)
- Animated form appearance
- Custom scrollbar styling
- Focus states with glowing effects
- Responsive grid layouts
- Professional color scheme

## Notes
- All form fields with '*' are required
- The form shows submitted details in an alert and below the form
- No validation checking is required for this experiment
- The form handles multiple selections for skills
- Mobile-friendly design with proper responsiveness

## Development Notes

### Form Data Structure
```javascript
{
  firstName: '',
  lastName: '',
  dob: '',
  gender: '',
  skills: [],
  address: '',
  state: '',
  country: ''
}
```

### Event Handlers
- `handleInputChange`: Manages text, date, and select inputs
- `handleSkillChange`: Manages checkbox selections for skills
- `handleSubmit`: Displays form data and updates submission state
- `handleCancel`: Clears all form fields

## Troubleshooting

**Port 3000 already in use:**
- Change the port in `vite.config.js` server configuration

**Dependencies not installing:**
- Delete `node_modules` and `package-lock.json`
- Run `npm install` again

**Styles not loading:**
- Ensure all CSS files are properly imported in components
- Clear browser cache (Ctrl+Shift+Delete)

## Building for Production

```bash
npm run build
```

This will create an optimized production build in the `dist/` directory.

## Author
CSE AI ML - Full Stack Development Course

## License
MIT License - Educational Purpose

---

**Experiment Status**: ✅ Complete with enhanced CSS styling and modern UI design
