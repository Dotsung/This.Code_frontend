// @flow
import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';

import { observable, action } from 'mobx'
import { observer, inject } from 'mobx-react'

import ProblemCard from './ProblemCard';

import * as ProblemApi from 'api/problem';

const Wrapper = styled.div`
    padding: 30px;
    width: 100%;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
`

const Title = styled.h1`
    margin: 0;
`

const ProblemListWrapper = styled.div`
    margin-top: 30px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`

const testList = [
    {
        title: 'dubtest1'
    },
    {
        title: 'dubtest2'
    },
    {
        title: 'dubtest3'
    },
    {
        title: 'dubtest4'
    },{
        title: 'dubtest1'
    },
    {
        title: 'dubtest2'
    },
    {
        title: 'dubtest3'
    },
    {
        title: 'dubtest4'
    },{
        title: 'dubtest1'
    },
    {
        title: 'dubtest2'
    },
    {
        title: 'dubtest3'
    },
    {
        title: 'dubtest4'
    },{
        title: 'dubtest1'
    },
    {
        title: 'dubtest2'
    },
    {
        title: 'dubtest3'
    },
    {
        title: 'dubtest4'
    },{
        title: 'dubtest1'
    },
    {
        title: 'dubtest2'
    },
    {
        title: 'dubtest3'
    },
    {
        title: 'dubtest4'
    }
]

@inject('userStore')
@observer
class ProblemList extends React.Component {

    state = {
        problemList: []
    }

    componentDidMount(){
        const { token } = this.props.userStore;

        ProblemApi.getList({token})
        .then((result) => {
            console.log(result);
            this.setState({
                problemList: result.data
            });
        })
        .catch((result) => {
            console.log(result);
        })
    }

    render(){
        return (
            <Wrapper>
                <Title>문제 리스트</Title>
                <ProblemListWrapper>
                    {this.state.problemList.map((p, index) => 
                        <ProblemCard 
                            index={index+1}
                            title={p.name}
                            user={p.user}
                            tryNum={p.tryNum}
                            corNum={p.corNum}
                            key={index} 
                        />    
                    )}
                </ProblemListWrapper>
            </Wrapper>
        )
    }
}

export default ProblemList;