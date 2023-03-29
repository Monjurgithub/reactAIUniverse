import React, { useEffect, useState } from 'react';
import Button from '../Button/Button';
import Model from '../Model/Model';
import SingleData from '../SingleData/SingleData';

const Card = () => {
    const [data, setData] = useState([]);
    const [showAll, setShowAll] = useState(false);
    const [uniqueID, setuniqueID] = useState(null);
    const [singleData, setsingleData] = useState({})
    const heandleSort = () =>{
        const sortData = data.sort((a, b)=>
        {return new Date(a.published_in) - new Date (b.published_in);
        });
        
        setData([...data, sortData])

    }

    useEffect(() => {
        const dataLoad = async () => {
            const res = await fetch(`https://openapi.programming-hero.com/api/ai/tool/${uniqueID}`)
            const data = await res.json();
            setsingleData(data.data);
        }
        dataLoad();

    }, [uniqueID])


    const handleAll = () => {
        setShowAll(true);
    };

    useEffect(() => {
        const loadData = async () => {
            const res = await fetch(`https://openapi.programming-hero.com/api/ai/tools`)
            const data = await res.json();
            setData(data.data.tools);

        }
        loadData();

    }, [])

    return (
        <div>
            <span onClick={heandleSort}>
                <Button>Sort By Date</Button>
            </span>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:px-12 my-6'>
                {
                    data.slice(0, showAll ? 12 : 6).map((singleData => <SingleData singleData={singleData} key={singleData.id} setuniqueID={setuniqueID}></SingleData>))
                }

            </div>
            {
                !showAll && <span onClick={handleAll}>
                    <Button>ShowAll</Button>
                </span>
            }
            <Model singleData={singleData}></Model>
        </div>
    );
};

export default Card;