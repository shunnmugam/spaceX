import React, {useCallback, useEffect} from 'react';
import Card from './Card';
import {connect} from 'react-redux'
import { updateFilter } from '../redux/action';
import { getData } from '../redux/middleware';

const defaultFilters = [true, false];

const Filter = (props) => {

    useEffect(() => {
        props.getData(props.filters)
    },[props.filters])

    const getYears = useCallback(() => {
        const years = [];
        const currentYear = new Date().getFullYear();
        for(let i =14;i >= 0;i--) {
            years.push(currentYear - i)
        }
        return years;
    },[])

    const setFilter = useCallback((key, value, isActive = false) => {
        if(isActive) {
            props.updateFilter({[key]: undefined})
        } else {
            props.updateFilter({[key]: value})
        }
    },[props.updateFilter])
    return <><div className="filter__wrapper">
        <Card>
            <div className="filter__main">
            <h5 className="filter__title">
                Filters
            </h5>
            <div className="filter__section">
                <h6 className="filter__section-title">Launch Year</h6>
                <ul className="filter__ul year-filter">
                    {
                        getYears().map((y) => {
                            const isActive = props.filters.launch_year === y;
                            return <li key={y} className="tag">
                                <span className={isActive ? 'active': ''} onClick={() => {
                                    
                                    setFilter("launch_year", y, isActive)
                                }}>{y}</span>
                            </li>
                        })
                    }
                </ul>
            </div>
            <div className="filter__section">
                <h6 className="filter__section-title">Successfull Launch</h6>
                <ul className="filter__ul">
                    {defaultFilters.map((f,i) => {
                        const isActive = props.filters.launch_success === f;
                        return <li key={"launch_success"+i} className="tag">
                            <span className={isActive ? "active" : ""} onClick={() => {
                                setFilter("launch_success", f, isActive)
                            }}>{f ? "True" : "False"}</span></li>
                    })}
                    
                </ul>
            </div>
            <div className="filter__section">
                <h6 className="filter__section-title">Successfull Landing</h6>
                <ul className="filter__ul">
                    {defaultFilters.map((f,i) => {
                        const isActive = props.filters.land_success === f;
                        return <li key={"land_success"+i} className="tag">
                            <span className={isActive ? "active" : ""} onClick={() => {
                                setFilter("land_success", f, isActive)
                            }}>{f ? "True" : "False"}</span></li>
                    })}
                </ul>
            </div>
            </div>
        </Card>
    </div>
    <style jsx>{`
        .filter__wrapper {
            padding: 10px;
        }
        .filter__main {
            padding: 25px;
        }
        .filter__title {
            width: 100%;
            margin: 0;
            font-size: 17px;
        }
        .filter__section-title {
            text-align: center;
            margin: 6px 0px;
            font-size: 14px;
            font-weight: 400;
            border-bottom: 1px solid #c5c5c5;
            padding-bottom: 7px;
        }
        .filter__ul {
            display: flex;
            list-style: none;
            padding:0;
            flex-wrap: wrap;
        }
        
        .filter__ul li {
            width: 50%;
        }
        .filter__ul li span {
            padding:  3px 10px;
            display: inline-block;
            background: #c5e09b;
            margin-bottom: 7px;
            border-radius: 5px;
            cursor: pointer;
        }
        .filter__ul li:nth-child(2n) {
            text-align: right
        }
        .filter__ul li span.active {
            background: green;
        }
    `}</style>
    </>
}

const mapStateToProps = (store) => {
    return {
        filters : store.filters
    }
}

const mapActionToProps = (dispatch) => {
    return {
        updateFilter: (filter) => {
            console.log("dfdf", filter)
            dispatch(updateFilter(filter))
        },
        getData: (filter) => {
            dispatch(getData(filter))
        }
    }
}

export default connect(mapStateToProps, mapActionToProps)(Filter);