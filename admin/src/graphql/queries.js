import gql from "graphql-tag"


export const GET_ADMIN_PROFILE = gql`
  query GET_ADMIN_PROFILE {
    getAdminProfile {
      id
      createdAt
      updatedAt
      username
      permissions
      role
    }
  }
`


export const GET_DASHBOARD_INFO = gql`
  query GET_DASHBOARD_INFO (
    $dateFrom: DateTime
    $dateTo: DateTime
  ){
    getDashboardInfo (
      dateFrom: $dateFrom
      dateTo: $dateTo
    ) {
      bonuses
      commissions
      deposits
      gifts
      ngr
      promotions
      referrals
      withdraws

      gamesRevenue {
        betsAmount
        betsQty
        gameMode
        ggr
        looseAmount
        winsAmount
      }
    }
  }
`


export const FIND_USERS = gql`
  query FOND_USERS (
    $registeredFrom: DateTime
    $registeredTo: DateTime
    $deposited: Boolean
  ) {
    findUsers (
      registeredFrom: $registeredFrom
      registeredTo: $registeredTo
      deposited: $deposited
    ) {
      count
      users {
        id
        createdAt
        username
        balance
        role
        mobilePhone
        email
      }
    }
  }
`


export const GET_USER = gql`
  query GET_USER ($id: String!){
    getUser (id: $id) {
      id
      img
      role
      username
    }
  }
`


export const GET_USER_INFO = gql`
  query GET_USER_INFO ($userId: String!) {
    getUserInfo(userId: $userId){
      userId
      balanceReal
      balanceBonus
      promocodes
      bonusSlot
      moneyRain
      chatPrises
      depositCount
      depositAmount
      withdrawsCount
      withdrawsAmount
      referralWithdrawCount
      referralWithdrawAmount
      ngr
      betsAmount
      depositWagering
      gamesInfo {
        gameMode
        betsAmount
        winsAmount
      }
    }
  }
`


export const GET_USER_GAMES_HISTORY = gql`
  query GET_USER_GAMES_HISTORY(
    $userId: String!
    $dateFrom: DateTime
    $dateTo: DateTime
    $gameMode: GameMode
  ) {
    getUserGamesHistory (
      userId: $userId
      dateFrom: $dateFrom
      dateTo: $dateTo
      gameMode: $gameMode
    ) {
      count
      history {
        id
        gameMode
        timestamp
        betAmount
        result
      }
    }
  }
`


export const GET_WITHDRAWS = gql`
  query GET_WITHDRAWS (
    $dateFrom: DateTime
    $dateTo: DateTime
    $userId: String
    $accepted: Boolean
    $denied: Boolean
  ) {
    getWithdraws (
      dateFrom: $dateFrom
      dateTo: $dateTo
      userId: $userId
      accepted: $accepted
      denied: $denied
    ) {
      count
      withdraws {
        createdAt
        id
        userId
        amount
        accepted
        denied
        reason
      }
    }
  }
`


export const GET_ADMIN_USERS = gql`
  query GET_ADMIN_USERS {
    getAllAdminUsers {
      createdAt
      updatedAt
      id
      username
      role
      permissions
    }
  }
`
