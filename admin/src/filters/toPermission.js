const PERMISSION_NAMES = {
  DASHBOARD_ADMINISTRATION: 'Просматривать дашборд',
  CHAT_ADMINISTRATION: 'Управлять чатом',
  BONUS_ADMINISTRATION: 'Управлять бонусами',
  USERS_ADMINISTRATION: 'Управлять пользователями',
  WITHDRAW_ADMINISTRATION: 'Управлять выводами',
  GAMES_ADMINISTRATION: 'Управлять играми',
}


export default function toPermission(permission) {
  return PERMISSION_NAMES[permission] || null
}

