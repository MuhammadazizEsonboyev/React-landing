import React, { useState } from 'react'
import {
  PricingCardPlan,
  PricingHeading,
  PricingWrapper
} from '../Pricing/Pricing.elements'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import SendIcon from '@mui/icons-material/Send'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4
}

export default function Main () {
  const [swecound, setSecound] = useState()
  const [minute, setMinute] = useState()
  const [hour, setHour] = useState()
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  setInterval(async () => {
    let time = await new Date()
    await setSecound(time?.getSeconds())
    await setMinute(time?.getMinutes())
    await setHour(time?.getHours())
  }, 1000)
  return (
    <>
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby='modal-modal-title'
          aria-describedby='modal-modal-description'
        >
          <Box sx={style}>
            <PricingCardPlan
              style={{
                color: 'black',
                textAlign: 'center',
                marginBottom: '10px'
              }}
            >
              Pul o'tkazmalar
            </PricingCardPlan>
            <Typography
              id='modal-modal-title'
              variant='h6'
              component='div'
              sx={{ display: 'flex', justifyContent: 'space-between' }}
            >
              <a href='https://payme.uz/621b48f24f819be147cea688'>
                <Button variant='outlined' endIcon={<SendIcon />}>
                  Click
                </Button>
              </a>
              <a
                href='https://my.click.uz/clickp2p/E0BAE513BD4F7DB642E63A8C507AEA959DC18321117AEB517D42CEFC032296B0'
              >
                <Button variant='outlined' endIcon={<SendIcon />}>
                  PayMe
                </Button>
              </a>
            </Typography>
          </Box>
        </Modal>
      </div>

      <PricingWrapper>
        <PricingCardPlan style={{ color: 'white' }}>
          Qabul tugashiga qoldi:{' '}
        </PricingCardPlan>
        <PricingHeading>
          00:{hour >= 10 ? hour : '0' + hour}:
          {minute >= 10 ? minute : '0' + minute}:
          {swecound >= 10 ? swecound : '0' + swecound}
        </PricingHeading>
        <Button
          sx={{
            border: '2px solid white',
            background: 'transparent',
            width: '100%',
            height: '40px',
            borderRadius: '4px',
            marginBottom: '50px',
            color: 'white',
            fontSize: '13px'
          }}
          onClick={handleOpen}
        >
          Hoziroq joyingizni band qiling
        </Button>
      </PricingWrapper>
    </>
  )
}
