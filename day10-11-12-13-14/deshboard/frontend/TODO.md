# Frontend Improvement TODO (day10-11-12-13-14/deshboard/frontend)

## Step 1: Refactor layout (remove inline styles)
- Update `src/App.js` to remove inline `style={{...}}` wrappers.
- Add equivalent layout classes in `src/App.css`.

## Step 2: Improve Registration UX
- Update `src/Registration.js` to add `isSubmitting` state.
- Disable submit button during API call.
- Optional: add `aria-live` for error text.

## Step 3: Improve API page UI
- Update `src/Apicalling.js` to move inline table styles into CSS.
- Add responsive table container + improved loading/error panels.

## Step 4: Styling polish
- Adjust `src/Counter.js` + `src/Header.js` only if needed for consistent spacing.

## Step 5: Test manually
- Run `npm start` in `deshboard/frontend`.
- Verify routes: `/`, `/register`, `/api-users`, `/dashboard/profile`, `/dashboard/settings`.

