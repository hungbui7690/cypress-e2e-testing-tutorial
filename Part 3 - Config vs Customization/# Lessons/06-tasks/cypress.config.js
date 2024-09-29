import { defineConfig } from 'Cypress'

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:5173',
    setupNodeEvents(on, config) {
      // before:run , after:run...
      on(
        'task',
        {
          seedDatabase(filename) {
            // run nodejs code
            // e.g. edit a file here
          },
        },
        () => {}
      )
    },
  },
})
