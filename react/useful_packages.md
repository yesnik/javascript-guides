# Useful Packages

## styled-components

[Styled components](https://styled-components.com/) allows us: 

- use CSS in js
- change styles depending on attributes

```jsx
import styled from 'styled-components'

const RedButton = styled.button`
    border: 3px solid red;
    padding: ${props => props.big ? '30px' : 'auto'};
    
    &:hover {
        background-color: yellow;
    }
`

<RedButton>Press me</RedButton>
<RedButton big={true}>Press me</RedButton>
```
