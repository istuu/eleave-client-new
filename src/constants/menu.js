const data = [
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
        label: "menu.leave-request-approve",
        to: "/admin/leave-request/approve"
      },
      {
        icon: "simple-icon-close",
        label: "menu.leave-request-pending",
        to: "/admin/leave-request/reject"
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
export default data;
