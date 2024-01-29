import PropTypes from "prop-types";
import { IoClose } from "react-icons/io5";
import * as Styled from './modal.styles.js'


export const Modal = ({post, setIsModal}) => {
    console.log(post[0])
    return (
        <Styled.ModalWrapper>
            <Styled.Container>
                <Styled.ImageContainer>
                    <Styled.Image>
                        <img src={post[0].imageUrl} alt="image" />
                    </Styled.Image>
                </Styled.ImageContainer>
                <Styled.PostActionContainer>
                    <Styled.Icons>
                        <IoClose
                            style={{cursor: 'pointer'}}
                            size={35}
                            onClick={() => setIsModal(false)}
                        />
                    </Styled.Icons>
                    <Styled.PostData>
                        <Styled.UserPhoto>
                            <img src={post[0].user.imageUrl} alt=""/>
                        </Styled.UserPhoto>
                        <Styled.UserInfo>
                            <h4>{post[0].user.name}</h4>
                            <span>{post[0].user.login}</span>
                        </Styled.UserInfo>
                    </Styled.PostData>
                    <Styled.DescriptionContainer>
                        <p>{post[0].description}</p>
                        <span>{post[0].createdAt}</span>
                    </Styled.DescriptionContainer>
                    <Styled.Comments>
                        <Styled.CommentsHeading>
                            <h3>Comments</h3>
                        </Styled.CommentsHeading>
                    </Styled.Comments>
                </Styled.PostActionContainer>
            </Styled.Container>
        </Styled.ModalWrapper>
    )
}

Modal.propTypes = {
    post: PropTypes.array,
    setIsModal: PropTypes.any,
}