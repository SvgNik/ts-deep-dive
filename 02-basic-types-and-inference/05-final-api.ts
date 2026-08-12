async function fetchUsers(): Promise<
  {
    id: number;
    name: string;
    username: string;
    email: string;
    address: { city: string };
    company: { name: string };
  }[]
> {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`);
  }
  const data = await response.json();
  return data;
}

function getEmailsByCity(
  users: {
    id: number;
    name: string;
    username: string;
    email: string;
    address: { city: string };
    company: { name: string };
  }[],
  city: string,
): string[] {
  return users
    .filter((user) => user.address.city === city)
    .map((user) => user.email);
}

function groupUsersByCompany(
  users: {
    id: number;
    name: string;
    username: string;
    email: string;
    address: { city: string };
    company: { name: string };
  }[],
): { company: string; count: number }[] {
  const initial: { [key: string]: number } = {};
  const counts = users.reduce((acc, user) => {
    acc[user.company.name] = (acc[user.company.name] || 0) + 1;
    return acc;
  }, initial);
  return Object.entries(counts).map(([company, count]) => ({ company, count }));
}

function findUserByUsername(
  users: {
    id: number;
    name: string;
    username: string;
    email: string;
    address: { city: string };
    company: { name: string };
  }[],
  username: string,
):
  | {
      id: number;
      name: string;
      username: string;
      email: string;
      address: { city: string };
      company: { name: string };
    }
  | undefined {
  return users.find((user) => user.username === username);
}

async function main(): Promise<void> {
  try {
    const users = await fetchUsers();
    console.log(getEmailsByCity(users, "Gwenborough"));
    console.log(groupUsersByCompany(users));
    const user = findUserByUsername(users, "Bret");
    if (user) {
      console.log(user.name, user.email);
    }
  } catch (error) {
    console.error(error);
  }
}

main();
