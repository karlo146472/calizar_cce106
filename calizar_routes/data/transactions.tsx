export type Transaction = {
  id: string;
  name: string;
  category: string;
  amount: number;
  type: 'income' | 'expense';
  date: string;
  note: string;
};

export const transactions: Transaction[] = [
  {
    id: '1',
    name: 'Groceries',
    category: 'Food',
    amount: 850,
    type: 'expense',
    date: 'September 10, 2026',
    note: 'Weekly grocery shopping',
  },
  {
    id: '2',
    name: 'Internet Bill',
    category: 'Bills',
    amount: 1200,
    type: 'expense',
    date: 'September 9, 2026',
    note: 'Monthly internet payment',
  },
  {
    id: '3',
    name: 'Allowance',
    category: 'Income',
    amount: 5000,
    type: 'income',
    date: 'September 8, 2026',
    note: 'Monthly allowance',
  },
  {
    id: '4',
    name: 'Transportation',
    category: 'Transport',
    amount: 250,
    type: 'expense',
    date: 'September 7, 2026',
    note: 'Transportation expenses',
  },
  {
    id: '5',
    name: 'School Supplies',
    category: 'Education',
    amount: 600,
    type: 'expense',
    date: 'September 6, 2026',
    note: 'Notebooks and other supplies',
  },
];