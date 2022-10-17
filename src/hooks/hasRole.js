const hasRole = (role, user) => {
  if (!user || !user.role || !user.role.name) return false;
  const role_priority = [
    "superuser",
    "attorney",
    "paralegal",
    "property-manager-supervisor",
    "property-manager",
  ];

  let rolePriority = role_priority.indexOf(role);
  let validRoles = role_priority.slice(0, rolePriority + 1);
  return validRoles.includes(user.role.name);
};

export default hasRole;
