const routes = {
  home: "/",
  about: "/about",
  reviews: "/reviews",

  register: "/register",
  login: "/login",
  logout: "/logout",

  discover: "/discover",
  details: "/details/:id",
  location: "/location",
  contact: "/contact",

  profile: "/profile",
  booking: "/booking",
  chat: "/chat",
  chatID: "/chat/:id",

  admin: "/admin",
  adminDashboard: "/admin/dashboard",
  adminLogin: "/admin/login",

  adminBookings: "/admin/bookings",
  adminBookingsAdd: "/admin/bookings/add",
  adminBookingsEdit: "/admin/bookings/edit/:id",

  adminSpaces: "/admin/spaces",
  adminSpacesAdd: "/admin/spaces/add",
  adminSpacesEdit: "/admin/spaces/edit/:id",

  adminUsers: "/admin/users",
  adminUsersAdd: "/admin/users/add",
  adminUsersEdit: "/admin/users/edit/:id",

  adminManagers: "/admin/managers",
  adminManagersAdd: "/admin/managers/add",
  adminManagersEdit: "/admin/managers/edit/:id",

  adminReviews: "/admin/reviews",
  adminReviewsAdd: "/admin/reviews/add",
  adminReviewsEdit: "/admin/reviews/edit/:id",

  adminLivechat: "/admin/chat",
  adminLivechatID: "/admin/chat/:id",
};

export default routes;
