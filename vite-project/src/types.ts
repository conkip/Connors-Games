interface ScoreHistoryItem {
  score: number;
  color: string;
}

interface ScoreKeeper {
  name: string;
  color: string;
  totalScore: number;
  history: ScoreHistoryItem[];
}

interface Board {
  name: string;
  color: string;
  increments: [number, number, number]; // three-number increments
  scoreKeepers: ScoreKeeper[];
}

interface UserPreferences {
  boards: Board[];
}

interface User {
  _id: string; // or number, unique identifier
  name: string;
  username: string;
  password: string; // hashed password
  preferences: UserPreferences;
}

interface CreditCard {
    type: string;
    number: string;
    exprDate: string;
    cvv: string;
};

export type UserType = User;

/*
    firebase for the database

    USER DATA:

    message (login to save board and player preferences!)

    form:
    firstname:
    lastname:
    username: (say email recommended in the textbox)
    password:

    message (dont worry, your stuff)
    
    _id: unique id
    name: string   (made of first name and last name)
    username: unique username
    password: hashed password

    preferences: json
    
    {
    }
    
*/
