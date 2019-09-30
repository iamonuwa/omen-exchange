import React from 'react'
import styled, { withTheme } from 'styled-components'
import { ViewCard } from '../view_card'
import { Button } from '../../common'
// import { FullLoading } from '../../common/full_loading'
import { ButtonContainer } from '../../common/button_container'
import { Table, TD, TH, THead, TR } from '../../common/table'
import { SubsectionTitle } from '../../common/subsection_title'

const TDStyled = styled(TD)<{ winningOutcome?: boolean }>`
  color: ${props => (props.winningOutcome ? props.theme.colors.primary : 'inherit')};
  font-weight: ${props => (props.winningOutcome ? '700' : '400')};
  opacity: ${props => (props.winningOutcome ? '1' : '0.35')};
`

TDStyled.defaultProps = {
  winningOutcome: false,
}

const TableStyled = styled(Table)`
  margin-bottom: 30px;
`

interface Props {
  handleFinish: () => void
  theme?: any
}

export const WithdrawWrapper = (props: Props) => {
  const { handleFinish, theme } = props
  const TableHead = ['Outcome', 'Shares', 'Price', 'Payout']
  const TableCellsAlign = ['left', 'right', 'right', 'right']

  const renderTableHeader = (): React.ReactNode => {
    return (
      <THead>
        <TR>
          {TableHead.map((value, index) => {
            return (
              <TH key={index} textAlign={TableCellsAlign[index]}>
                {value}
              </TH>
            )
          })}
        </TR>
      </THead>
    )
  }

  //TODO: Get real data
  const balance = [
    {
      winningOutcome: true,
      outcomeName: 'Yes',
      payout: '35',
      currentPrice: '75',
      shares: '50',
    },
    {
      winningOutcome: false,
      outcomeName: 'No',
      payout: '75',
      currentPrice: '35',
      shares: '25',
    },
  ]

  const renderTableData = () => {
    return balance.map((balanceItem: any, index: number) => {
      const { outcomeName, payout, currentPrice, shares, winningOutcome } = balanceItem
      return (
        <TR key={index}>
          <TDStyled winningOutcome={winningOutcome} textAlign={TableCellsAlign[0]}>
            {outcomeName}
          </TDStyled>
          <TDStyled winningOutcome={winningOutcome} textAlign={TableCellsAlign[1]}>
            {shares}
          </TDStyled>
          <TDStyled winningOutcome={winningOutcome} textAlign={TableCellsAlign[2]}>
            {currentPrice} DAI
          </TDStyled>
          <TDStyled winningOutcome={winningOutcome} textAlign={TableCellsAlign[3]}>
            {payout}
          </TDStyled>
        </TR>
      )
    })
  }

  return (
    <>
      <ViewCard>
        {<SubsectionTitle>Balance</SubsectionTitle>}
        <TableStyled head={renderTableHeader()}>{renderTableData()}</TableStyled>
        <SubsectionTitle>Details</SubsectionTitle>
        asdadsas
        <SubsectionTitle>Market Results</SubsectionTitle>
        asddas
        <ButtonContainer>
          <Button onClick={() => handleFinish()}>Redeem</Button>
          <Button backgroundColor={theme.colors.secondary} onClick={() => handleFinish()}>
            Withdraw Collateral
          </Button>
        </ButtonContainer>
      </ViewCard>
      {/* {status === Status.Loading ? <FullLoading /> : null} */}
    </>
  )
}

export const Withdraw = withTheme(WithdrawWrapper)
