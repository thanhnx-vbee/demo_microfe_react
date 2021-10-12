// container/src/components/HelloReactApp.js
import { mount } from 'helloReact/HelloReactApp';
import React, { useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';

export default () => {
    const ref = useRef(null);
    const history = useHistory();
    console.log('==================',ref, history)
    useEffect(() => {
        const { onParentNavigate } = mount(ref.current)
        history.listen(onParentNavigate)
    }, [])

    return <div ref={ref} />
}