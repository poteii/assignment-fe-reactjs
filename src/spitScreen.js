import styled from 'styled-components'

const Container = styled.div`
    display: flex;
`;


export const SplitScreen = ({
    left: Left,
    right: Right,
}) => {
    return (
        <Container>
            <div>
                <Left />
            </div>
            <div>
                <Right></Right>
            </div>
        </Container>
    )
}