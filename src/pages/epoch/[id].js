/** @jsxImportSource theme-ui */
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Flex, Heading, Image } from 'theme-ui'
import { withApollo } from '../../apollo/client'

const EpochIndex = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <Flex sx={{ alignItems: 'center' }}>
      <Link href="/">
        <a
          sx={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '40px',
            height: '40px',
            bg: 'rgba(255,255,255,0.04)',
            border: 'none',
            borderRadius: '50%',
            '&:hover': {
              bg: 'arrowButtonHover',
            },
          }}
        >
          <Image
            sx={{
              transform: 'rotate(90deg)',
            }}
            src="/images/Direction-Down.svg"
          />
        </a>
      </Link>
      <Heading as="h1" sx={{ ml: 5, fontSize: '64px' }}>
        {id}
      </Heading>
    </Flex>
  )
}

export default withApollo(EpochIndex, { ssr: false })
