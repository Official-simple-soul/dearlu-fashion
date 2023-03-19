export default function login_validate({ email, password }) {
  const errors = {};
// email validation
  if (!email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
    errors.email = 'Invalid email address';
  }

  //   vpassword validation
  if (!password) {
    errors.password = 'Required';
  } else if (password.length < 8) {
    errors.password = 'Password must be more than 8 character long';
  }
  else if (password.includes(' ')) {
    errors.password = 'Invalid password'
  }

  //...

  return errors;
}

export function registerValidate({name, email, phone, password}) {
    const errors = {}
// name validation
    if(!name) {
        errors.name = 'Please input your full name' 
    }
// email validation
    if (!email) {
        errors.email = 'Required';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
        errors.email = 'Invalid email address';
      }
    //   phone validation
    if (!phone) {
        errors.phone = 'Please input a phone number'
    } else if (/^[0-9]{10}$/.test(Number(phone)) === false) {
        errors.phone = 'Please input a valid phone number'
    }

// password validation
    if (!password) {
        errors.password = 'Required';
      } else if (password.length < 8) {
        errors.password = 'Password must be more than 8 character long';
      }
      else if (password.includes(' ')) {
        errors.password = 'Invalid password'
      }
return errors
}
