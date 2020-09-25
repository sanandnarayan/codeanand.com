/** @jsx jsx */
import { jsx, Box } from "theme-ui"
import { useState } from "react"
import addToMailchimp from "gatsby-plugin-mailchimp"

export const EmailListForm = () => {
  const [email, setEmail] = useState("")
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = e => {
    e.preventDefault()
    addToMailchimp(email).then(data => {
      setSubscribed(true)
    })
  }

  const handleEmailChange = event => {
    setEmail(event.currentTarget.value)
  }

  return (
    <div style={{ textAlign: "center", marginTop: "10px" }}>
      {subscribed ? (
        <Box fontSize={[0, 0]} color={"black.2"}>
          Thank you for subscribing
        </Box>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            placeholder="Email address"
            name="email"
            type="text"
            onChange={handleEmailChange}
          />
          <button type="submit">Subscribe</button>
        </form>
      )}
    </div>
  )
}
