import React from 'react'
import { Flex, Heading, Image, Input } from 'theme-ui'

function HeadingSearch(props) {
  return (
    <Flex sx={{ alignItems: 'center', mb: 8 }}>
      <Heading as="h1">Epochs</Heading>
      <Flex sx={{ ml: 3, pl: 3, borderLeft: '1px solid rgba(255,255,255,0.25)' }}>
        <Image src="/images/Search.svg" />
        <Input
          sx={{
            border: 'none',
            fontSize: 1,
            fontWeight: 400,
            fontFamily: 'body',
            '&:focus': {
              outline: 'none',
            },
            '&::placeholder': {
              color: 'text',
              fontSize: 1,
              fontWeight: 400,
              fontFamily: 'body',
            },
          }}
          placeholder="Search"
        />
      </Flex>
    </Flex>
  )
}

export default HeadingSearch
