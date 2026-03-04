/**
 * Form handling utilities
 */

export interface FormData {
  name: string;
  organization: string;
  userType: string;
  email: string;
}

export function initFormHandling(): void {
  const form = document.querySelector('.cta-form') as HTMLFormElement | null;
  if (!form) return;

  const submitButton = form.querySelector('.form-submit') as HTMLButtonElement | null;
  const inputs = form.querySelectorAll('.form-input');

  if (submitButton) {
    submitButton.addEventListener('click', (e) => {
      e.preventDefault();
      
      // Collect form data
      const formData: FormData = {
        name: (form.querySelector('input[placeholder="Your name"]') as HTMLInputElement).value,
        organization: (form.querySelector('input[placeholder="Organization"]') as HTMLInputElement).value,
        userType: (form.querySelector('select') as HTMLSelectElement).value,
        email: (form.querySelector('input[placeholder="Email address"]') as HTMLInputElement).value,
      };

      // Validate form
      if (!validateForm(formData)) {
        console.error('Please fill in all fields');
        return;
      }

      // Log or submit form data
      console.log('Form submitted:', formData);
      
      // Reset form
      inputs.forEach((input) => {
        const element = input as HTMLInputElement;
        element.value = '';
      });

      // Show success message
      alert('Thank you for reaching out! We\'ll be in touch soon.');
    });
  }
}

function validateForm(data: FormData): boolean {
  return Boolean(
    data.name && 
    data.organization && 
    data.userType && 
    data.email && 
    data.email.includes('@')
  );
}
