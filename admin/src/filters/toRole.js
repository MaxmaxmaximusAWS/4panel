const ROLES_NAMES = {
  USER: 'Игрок',
  ADMINISTRATOR: 'Администратор',
  SUPERUSER: 'Владелец',
  BANNED: 'BANNED',
}


export default function toRole(role) {
  return ROLES_NAMES[role] || null
}

