import React, { useEffect, useState } from 'react';
import Icons from '../components/Icons';
import Options from '../components/Options';
import { tableData } from '../Data/tableData';
import styles from '../Styles/Module/Home.module.css';

const Home = () => {

    const [tData, setTData] = useState(tableData.slice(0, 2))
    const [options, setOptions] = useState([])
    const [tDataOptions, setTDataOptions] = useState([])

    useEffect(() => {
        let options = [];
        tableData.forEach(each => {
            options.push((each.options).toUpperCase())
        })
        setOptions(options)
    }, [])

    useEffect(() => {
        let options = [];
        tData.forEach(each => {
            options.push((each.options).toUpperCase())
        })
        setTDataOptions(options)
    }, [tData])

    const handleChange = (e) => {

        // e.target[0].selected = true;

        if (!(tDataOptions.slice(0, tData.length)).includes((e.target.value).toUpperCase())) {
            const newTData = [...tData];
            const newEntry = tableData.filter(each => (each.options).toUpperCase() == (e.target.value).toUpperCase())
            newTData.push(newEntry[0]);
            setTData(newTData)
        }
        else {
            alert('Can\'t select identical Symbol')
        }
    }

    const handleChangeAgain = (e, index) => {

        if (!(tDataOptions.slice(0, tData.length)).includes((e.target.value).toUpperCase())) {

            const newTData = [...tData];
            newTData[index] = tableData.filter(each => (each.options).toUpperCase() == (e.target.value).toUpperCase())[0]
            setTData(newTData)
        }
        else {
            alert('Can\'t select identical Symbol')
        }
    }

    return (
        <div className={styles.container} >
            <div className={styles.bleedArea} >
                <div className={styles.mainArea} >
                    <table className={styles.table} >
                        <tr>
                            <th>Stocks</th>
                            <th></th>
                            <th>AD</th>
                            <th>ADX</th>
                            <th>AreaRSI</th>
                            <th>Indi4</th>
                            <th>Indi5</th>
                            <th>Indi6</th>
                            <th>Indi7</th>
                            <th>Indi8</th>
                        </tr>
                        {
                            tData.map((data, index) =>
                                <tr>
                                    <td>
                                        <Options key={index} index={index} handleChangeAgain={handleChangeAgain} value={data.options} options={options} />
                                    </td>
                                    <td className={styles.icons} > <Icons /> </td>
                                    <td>{data.indi1}</td>
                                    <td>{data.indi2}</td>
                                    <td>{data.indi3}</td>
                                    <td>{data.indi4}</td>
                                    <td>{data.indi5}</td>
                                    <td>{data.indi6}</td>
                                    <td>{data.indi7}</td>
                                    <td>{data.indi8}</td>
                                </tr>
                            )
                        }
                        <tr>
                            <td>
                                <select onChange={(e) => handleChange(e)} name="" id="">
                                    <option selected >Select Symbol</option>
                                    {
                                        options.map(each =>
                                            <option key={each} > {each} </option>
                                        )
                                    }
                                </select>
                            </td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                        </tr>

                    </table>
                </div>
            </div>
        </div>
    );
};

export default Home;