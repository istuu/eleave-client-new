const menu_admin = [
  {
    id: "homepage",
    icon: "iconsminds-home",
    label: "menu.app",
    to: "/admin/home"
  },
  {
    id: "employee",
    icon: "iconsminds-male-female",
    label: "menu.employee",
    to: "/admin/employee"
  },
  {
    id: "form",
    icon: "simple-icon-note",
    label: "menu.form-leave",
    to: "/admin/form-leave"
  },
  {
    id: "leave-request",
    icon: "simple-icon-briefcase",
    label: "menu.leave-request",
    to: "/admin/leave-request",
    subs: [
      {
        icon: "simple-icon-clock",
        label: "menu.leave-request-pending",
        to: "/admin/leave-request/pending"
      },
      {
        icon: "simple-icon-check",
        label: "menu.leave-request-approved",
        to: "/admin/leave-request/approved"
      },
      {
        icon: "simple-icon-close",
        label: "menu.leave-request-rejected",
        to: "/admin/leave-request/rejected"
      }
    ]
  },
  {
    id: "settings",
    icon: "simple-icon-settings",
    label: "menu.setting",
    to: "/admin/setting",
    subs: [
      {
        icon: "iconsminds-user",
        label: "menu.account-setting",
        to: "/admin/setting/account"
      },
      {
        icon: "iconsminds-gears",
        label: "menu.configuration",
        to: "/admin/setting/configuration"
      }
    ]
  },
];

const menu_employee = [
  {
    id: "homepage",
    icon: "iconsminds-home",
    label: "menu.app",
    to: "/employee/home"
  },
  {
    id: "form",
    icon: "simple-icon-note",
    label: "menu.form-leave",
    to: "/employee/form-leave"
  },
  {
    id: "leave-request",
    icon: "simple-icon-briefcase",
    label: "menu.leave-request",
    to: "/employee/leave-request",
    subs: [
      {
        icon: "simple-icon-clock",
        label: "menu.leave-request-pending",
        to: "/employee/leave-request/pending"
      },
      {
        icon: "simple-icon-check",
        label: "menu.leave-request-approved",
        to: "/employee/leave-request/approved"
      },
      {
        icon: "simple-icon-close",
        label: "menu.leave-request-rejected",
        to: "/employee/leave-request/rejected"
      }
    ]
  },
  {
    id: "profile",
    icon: "iconsminds-male",
    label: "menu.profile",
    to: "/employee/profile"
  },
];

let data = [];
if(localStorage.getItem('role') === 'admin') {
  data = menu_admin;
}else if(localStorage.getItem('role') === 'employee') {
  data = menu_employee;
}

export default data;
