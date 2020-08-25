import gql from 'graphql-tag'


export const SEND_NOTIFICATION = gql`
  mutation (
    $receivers: [String!]
    $from: String!
    $message: String!
  ){
    sendNotification(
      receivers: $receivers
      from: $from
      message:$message
    )
  }
`


export const CREATE_PROMOCODE = gql`
  mutation CREATE_PROMOCODE(
    $amount: Float!
    $activationCount: Float!
    $timeoutSec: Float!
    $code: String!
  ) {
    createPromocode (
      amount: $amount
      activationCount: $activationCount
      timeoutSec: $timeoutSec
      code: $code
    ) {
      createdAt
      code
      amount
      activationCounter
      activationLimit
      expire
    }
  }
`


export const ACCEPT_WITHDRAW = gql`
  mutation ACCEPT_WITHDRAW ($id: String!){
    acceptWithdraw(id:$id)
  }
`


export const DENY_WITHDRAW = gql`
  mutation DENY_WITHDRAW (
    $id: String!
    $reason: String!
  ){
    deniWithdraw(
      id:$id
      reason:$reason
    )
  }
`


