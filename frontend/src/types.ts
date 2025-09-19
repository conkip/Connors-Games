/*
    Author: Connor Kippes
*/

export type PlayerScore = {
    id: string;
    name: string;
    color: string;
    totalScore: number;
    history: number[];
};

export type Board = {
    id: string;
    name: string;
    increments: [number, number, number]; // three-number increments
    scoreKeepers: PlayerScore[];
};

export type UserPreferences = {
    boards: Board[];
}

export type User = {
    id: string;
    name: string;
    username: string;
    password: string; // hashed password
    preferences: UserPreferences;
}


/*
    mongoDB or mySQL for the database

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
