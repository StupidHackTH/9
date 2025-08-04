export interface StatementOfActivitiesItem {
  label: string;
  amount: number;
}

export const statementOfActivities: {
  income: StatementOfActivitiesItem[];
  expenses: StatementOfActivitiesItem[];
} = {
  income: [
    { label: "From Previous Event", amount: 1648.11 },
    { label: "Corporate Sponsors", amount: 118444.44 },
    { label: "Individual Sponsors", amount: 5672.88 },
    { label: "Post-Event Donations", amount: 2191.0 },
    { label: "Forfeited Deposit", amount: 1800.0 },
  ],
  expenses: [
    { label: "Venue & Accommodation", amount: 54656.02 },
    { label: "Food & Beverages", amount: 33392.0 },
    { label: "Prize", amount: 24145.68 },
    { label: "Swag", amount: 8363.0 },
    { label: "Props", amount: 2089.0 },
    { label: "Parking", amount: 2020.0 },
    { label: "Ticketing Platform", amount: 1230.0 },
    { label: "Equipment", amount: 1018.0 },
    { label: "Transportation", amount: 909.6 },
  ],
};
