# Useful Packages

## styled-components

[Styled components](https://styled-components.com/) allows us to use CSS in js:

```jsx
import styled from 'styled-components'

const RedButton = styled.button`
    border: 3px solid red;
    
    &:hover: {
        background-color: yellow;
    }
`

<RedButton>Press me</RedButton>
```
