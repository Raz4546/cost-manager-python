const costItems = [
  {
    id: 1,
    title: "McDonalds",
    description: "Food",
    amount: -70,
    balance: "10,397.85 ILS",
    date: "27/06/24", // Format: dd/mm/yy
    favorite: false,
    category: "Food", // Assigning category based on description
  },
  {
    id: 2,
    title: "Starbucks",
    description: "Coffee",
    amount: -25,
    balance: "10,322.85 ILS",
    date: "26/06/24", // Format: dd/mm/yy
    favorite: true,
    category: "Food", // Assigning category based on description
  },
  {
    id: 3,
    title: "Amazon",
    description: "Shopping",
    amount: -150,
    balance: "10,172.85 ILS",
    date: "25/06/24", // Format: dd/mm/yy
    favorite: false,
    category: "Other", // Assigning category based on description
  },
  {
    id: 4,
    title: "Uber",
    description: "Transportation",
    amount: -50,
    balance: "10,122.85 ILS",
    date: "24/06/24", // Format: dd/mm/yy
    favorite: true,
    category: "Transportation", // Assigning category based on description
  },
  {
    id: 5,
    title: "Netflix",
    description: "Subscription",
    amount: -40,
    balance: "10,082.85 ILS",
    date: "23/06/24", // Format: dd/mm/yy
    favorite: false,
    category: "Entertainment", // Assigning category based on description
  },
  {
    id: 6,
    title: "Groceries",
    description: "Food",
    amount: -200,
    balance: "9,882.85 ILS",
    date: "22/06/24", // Format: dd/mm/yy
    favorite: false,
    category: "Food", // Assigning category based on description
  },
  {
    id: 7,
    title: "Gas Station",
    description: "Fuel",
    amount: -100,
    balance: "9,782.85 ILS",
    date: "21/06/24", // Format: dd/mm/yy
    favorite: true,
    category: "Transportation", // Assigning category based on description
  },
  {
    id: 8,
    title: "Salary",
    description: "Salary",
    amount: "+5000",
    balance: "14,782.85 ILS",
    date: "30/06/24", // Format: dd/mm/yy
    favorite: false,
    category: "Other", // Assigning category based on description
  },
];

export default costItems;
