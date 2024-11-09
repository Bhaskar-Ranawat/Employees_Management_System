// const employees = [
//   {
//     id: 1,
//     email: "employee1@example.com",
//     password: "123",
//     tasks: [
//       {
//         taskTitle: "Complete documentation",
//         taskDescription: "Finalize the project documentation for module 1.",
//         taskDate: "2024-10-20",
//         taskCategory: "Documentation",
//         active: true,
//         newTask: false,
//         completed: false,
//         failed: false,
//       },
//       {
//         taskTitle: "Fix bug in user login",
//         taskDescription: "Resolve the bug where users are unable to log in.",
//         taskDate: "2024-10-22",
//         taskCategory: "Bug Fixing",
//         active: true,
//         newTask: true,
//         completed: false,
//         failed: false,
//       },
//       {
//         taskTitle: "Team meeting",
//         taskDescription: "Attend the weekly team meeting to discuss progress.",
//         taskDate: "2024-10-18",
//         taskCategory: "Meeting",
//         active: false,
//         newTask: false,
//         completed: true,
//         failed: false,
//       },
//     ],
//   },
//   {
//     id: 2,
//     email: "employee2@example.com",
//     password: "123",
//     tasks: [
//       {
//         taskTitle: "Update front-end layout",
//         taskDescription: "Revise the layout based on the new design mockups.",
//         taskDate: "2024-10-25",
//         taskCategory: "UI/UX",
//         active: true,
//         newTask: true,
//         completed: false,
//         failed: false,
//       },
//       {
//         taskTitle: "Client feedback review",
//         taskDescription: "Go over the feedback from the recent client demo.",
//         taskDate: "2024-10-18",
//         taskCategory: "Client Review",
//         active: false,
//         newTask: false,
//         completed: true,
//         failed: false,
//       },
//       {
//         taskTitle: "Set up CI/CD pipeline",
//         taskDescription: "Implement continuous integration and deployment.",
//         taskDate: "2024-10-30",
//         taskCategory: "DevOps",
//         active: true,
//         newTask: true,
//         completed: false,
//         failed: false,
//       },
//     ],
//   },
//   {
//     id: 3,
//     email: "employee3@example.com",
//     password: "123",
//     tasks: [
//       {
//         taskTitle: "Write unit tests",
//         taskDescription: "Add unit tests for new backend API.",
//         taskDate: "2024-10-21",
//         taskCategory: "Testing",
//         active: true,
//         newTask: false,
//         completed: false,
//         failed: false,
//       },
//       {
//         taskTitle: "Refactor codebase",
//         taskDescription: "Refactor the backend for better scalability.",
//         taskDate: "2024-10-27",
//         taskCategory: "Backend",
//         active: true,
//         newTask: true,
//         completed: false,
//         failed: false,
//       },
//     ],
//   },
//   {
//     id: 4,
//     email: "employee4@example.com",
//     password: "123",
//     tasks: [
//       {
//         taskTitle: "Conduct QA testing",
//         taskDescription: "Perform QA testing for the new release.",
//         taskDate: "2024-10-24",
//         taskCategory: "Testing",
//         active: true,
//         newTask: true,
//         completed: false,
//         failed: false,
//       },
//       {
//         taskTitle: "Submit weekly report",
//         taskDescription: "Send the weekly report to the project manager.",
//         taskDate: "2024-10-19",
//         taskCategory: "Reporting",
//         active: false,
//         newTask: false,
//         completed: true,
//         failed: false,
//       },
//     ],
//   },
//   {
//     id: 5,
//     email: "employee5@example.com",
//     password: "123",
//     tasks: [
//       {
//         taskTitle: "Design new logo",
//         taskDescription: "Create a new logo for the company website.",
//         taskDate: "2024-10-22",
//         taskCategory: "Design",
//         active: true,
//         newTask: true,
//         completed: false,
//         failed: false,
//       },
//       {
//         taskTitle: "Update server configuration",
//         taskDescription:
//           "Update the server configuration for better performance.",
//         taskDate: "2024-10-23",
//         taskCategory: "DevOps",
//         active: true,
//         newTask: true,
//         completed: false,
//         failed: false,
//       },
//       {
//         taskTitle: "Fix CSS issue",
//         taskDescription: "Resolve the CSS issue causing layout problems.",
//         taskDate: "2024-10-20",
//         taskCategory: "UI/UX",
//         active: false,
//         newTask: false,
//         completed: true,
//         failed: false,
//       },
//     ],
//   },
// ];

const employees = [
  {
    id: 1,
    firstName: "Aarav",
    email: "employee1@example.com",
    password: "123",
    taskCounts: { 
      active: 2, 
      newTask: 1, 
      completed: 1, 
      failed: 0 
    },
    tasks: [
      {
        taskTitle: "Complete documentation",
        taskDescription: "Finalize the project documentation for module 1.",
        taskDate: "2024-10-20",
        taskCategory: "Documentation",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Join meeting with Project Manager",
        taskDescription: "Finalize the project's proof of concept discussion.",
        taskDate: "2024-10-20",
        taskCategory: "Meeting",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
      {
        taskTitle: "Fix bug in user login",
        taskDescription: "Resolve the bug where users are unable to log in.",
        taskDate: "2024-10-22",
        taskCategory: "Bug Fixing",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Fix bug in the payment gateway",
        taskDescription: "Resolve the bug where users are unable to choose different payment options.",
        taskDate: "2024-10-22",
        taskCategory: "Bug Fixing",
        active: false,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Team meeting",
        taskDescription: "Attend the weekly team meeting to discuss progress.",
        taskDate: "2024-10-18",
        taskCategory: "Meeting",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
    ]
  },
  {
    id: 2,
    firstName: "Vihaan",
    email: "employee2@example.com",
    password: "123",
    taskCounts: { 
      active: 2, 
      newTask: 2, 
      completed: 1, 
      failed: 0 
    },
    tasks: [
      {
        taskTitle: "Update front-end layout",
        taskDescription: "Revise the layout based on the new design mockups.",
        taskDate: "2024-10-25",
        taskCategory: "UI/UX",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Join meeting with Project Manager",
        taskDescription: "Finalize the project's proof of concept discussion.",
        taskDate: "2024-10-20",
        taskCategory: "Meeting",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
      {
        taskTitle: "Client feedback review",
        taskDescription: "Go over the feedback from the recent client demo.",
        taskDate: "2024-10-18",
        taskCategory: "Client Review",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        taskTitle: "Set up CI/CD pipeline",
        taskDescription: "Implement continuous integration and deployment.",
        taskDate: "2024-10-30",
        taskCategory: "DevOps",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Fix bug in the payment gateway",
        taskDescription: "Resolve the bug where users are unable to choose different payment options.",
        taskDate: "2024-10-22",
        taskCategory: "Bug Fixing",
        active: false,
        newTask: true,
        completed: false,
        failed: false,
      },
    ]
  },
  {
    id: 3,
    firstName: "Ishaan",
    email: "employee3@example.com",
    password: "123",
    taskCounts: { 
      active: 2, 
      newTask: 1, 
      completed: 0, 
      failed: 0 
    },
    tasks: [
      {
        taskTitle: "Write unit tests",
        taskDescription: "Add unit tests for new backend API.",
        taskDate: "2024-10-21",
        taskCategory: "Testing",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Refactor codebase",
        taskDescription: "Refactor the backend for better scalability.",
        taskDate: "2024-10-27",
        taskCategory: "Backend",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Join meeting with Project Manager",
        taskDescription: "Finalize the project's proof of concept discussion.",
        taskDate: "2024-10-20",
        taskCategory: "Meeting",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
      {
        taskTitle: "Fix bug in the payment gateway",
        taskDescription: "Resolve the bug where users are unable to choose different payment options.",
        taskDate: "2024-10-22",
        taskCategory: "Bug Fixing",
        active: false,
        newTask: true,
        completed: false,
        failed: false,
      }
    ]
  },
  {
    id: 4,
    firstName: "Reyansh",
    email: "employee4@example.com",
    password: "123",
    taskCounts: { 
      active: 1, 
      newTask: 1, 
      completed: 1, 
      failed: 0 
    },
    tasks: [
      {
        taskTitle: "Conduct QA testing",
        taskDescription: "Perform QA testing for the new release.",
        taskDate: "2024-10-24",
        taskCategory: "Testing",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Submit weekly report",
        taskDescription: "Send the weekly report to the project manager.",
        taskDate: "2024-10-19",
        taskCategory: "Reporting",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
    ]
  },
  {
    id: 5,
    firstName: "Devansh",
    email: "employee5@example.com",
    password: "123",
    taskCounts: { 
      active: 2, 
      newTask: 2, 
      completed: 1, 
      failed: 0 
    },
    tasks: [
      {
        taskTitle: "Design new logo",
        taskDescription: "Create a new logo for the company website.",
        taskDate: "2024-10-22",
        taskCategory: "Design",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Update server configuration",
        taskDescription: "Update the server configuration for better performance.",
        taskDate: "2024-10-23",
        taskCategory: "DevOps",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Fix CSS issue",
        taskDescription: "Resolve the CSS issue causing layout problems.",
        taskDate: "2024-10-20",
        taskCategory: "UI/UX",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
    ]
  },
];


const admin = [
  {
    "id": 1,
    // Added the firstName here, change everything else too
    // 2:47:00
    "firstName":"Pagla",
    "email": "admin@example.com",
    "password": "123",
  },
];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

// setLocalStorage();

export const getLocalStorage = () => {
  const employeesData = JSON.parse(localStorage.getItem("employees"));
  const adminData = JSON.parse(localStorage.getItem("admin"));
  // console.log(employeesData);
  // console.log(adminData);

  return { employees: employeesData, admin: adminData };
};


// this is a big file, this json data can be stored separately and then fetched when needed