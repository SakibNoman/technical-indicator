import React, { useEffect, useState } from 'react';
import tableData from '../Data/tableData';
import styles from '../Styles/Module/Home.module.css';

const Home = () => {

    const [tData, setTData] = useState(tableData)
    const [options, setOptions] = useState([])

    useEffect(() => {
        let options = [];
        tData.forEach(each => {
            options.push((each.options).toUpperCase())
        })
        setOptions(options)
    }, [tData])

    const handleChange = (e) => {
        console.log(options);
        console.log(options.includes((e.target.value).toUpperCase()));
        if (!options.includes((e.target.value).toUpperCase())) {
            const newTData = [...tData, tableData[0]];
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
                    <table>

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
                            tData.map(each =>
                                <tr>
                                    <td>{each.options}</td>
                                    <td></td>
                                    <td>AD</td>
                                    <td>ADX</td>
                                    <td>AreaRSI</td>
                                    <td>Indi4</td>
                                    <td>Indi5</td>
                                    <td>Indi6</td>
                                    <td>Indi7</td>
                                    <td>Indi8</td>
                                </tr>
                            )
                        }
                        <tr>
                            <td>
                                <select onChange={(e) => handleChange(e)} name="" id="">
                                    <option value="one">One</option>
                                    <option value="two">Two</option>
                                    <option value="three">Three</option>
                                    <option value="four">Four</option>
                                </select>
                            </td>
                        </tr>

                    </table>
                </div>
            </div>
        </div>
    );
};

export default Home;