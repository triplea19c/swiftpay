const validation = {
  fullname: {
    length: {
      minimum: 4,
      message: "^Your fullname must be at least 4 characters"
    }
  },
  email: {
    email: {
      message: "^Please enter a valid email address"
    }
  },
  phone: {
    length: {
      minimum: 10,
      message: "^Phone number must be at least 10 characters"
    },
    format: {
      pattern: "[0-9]+",
      message: "can only contain numbers from 0-9"
    }
  },
  password: {
    length: {
      minimum: 5,
      message: "^Password must be at least 5 characters"
    }
  },
  confirmpassword: {
    length: {
      minimum: 5,
      message: "^Password must be at least 5 characters"
    },
    equality: "password"
  }
};

export default validation;
