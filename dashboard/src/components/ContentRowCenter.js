import React from 'react';
import UltimoproductoenDb from './UltimoproductoenDb';
import CategoriaInDb from './CategoriaInDb';

function ContentRowCenter(){
    return (
        <div className="row">
           
            <UltimoproductoenDb />
            <CategoriaInDb/>

        </div>
    )
}

export default ContentRowCenter;