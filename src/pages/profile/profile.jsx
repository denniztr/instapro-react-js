import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useGetUserPostsQuery } from '../../store/api/index.js';
import { UserData, Content } from '../../components/index.js';
import { Loader } from '../../shared/index.js';
import * as Styled from './profile-styles.js';

export const Profile = () => {
    const { id } = useParams();
    const { data, isLoading, refetch } = useGetUserPostsQuery(id);

    useEffect(() => {
        refetch();
    }, [refetch]);

    const contentWidth = '1200px';

    return (
        <Styled.Wrapper>
            <Styled.ProfileContainer>
                <Styled.UserDataWrapper>
                    {isLoading ? null : <UserData data={data} />}
                </Styled.UserDataWrapper>
                {isLoading ? (
                    <Loader />
                ) : (
                    <Content
                        contentWidth={contentWidth}
                        posts={data}
                        refetch={refetch}
                    />
                )}
            </Styled.ProfileContainer>
        </Styled.Wrapper>
    );
};
