import React, { Component } from 'react';
import { Link } from "react-router-dom";
import _ from "lodash";

import { ClassIcon } from "./Icons";
import spells from "./data/spells.json";
import details from "./res/wireframes/spell-detail.png";


class SpellTable extends Component {
  constructor(props) {
    super(props);
    let filters = {
      bard: true,
      cleric: true,
      druid: true,
      monk: true,
      paladin: true,
      ranger: true,
      sorcerer: true,
      warlock: true,
      wizard: true
    }
    this.state = {
      spells: [],
      charClassFilters: filters
    };

    this.toggleFilter = this.toggleFilter.bind(this);
    this.clearFilters = this.clearFilters.bind(this);
    this.allCharClasses = this.allCharClasses.bind(this);
  }

  componentWillMount() {
    let spellList = _.sortBy(spells, "level_int");
    this.setState({ spells: spellList });
  }

  toggleFilter(charClass) {
    let filters = this.state.charClassFilters;
    filters[charClass] = !filters[charClass]; //toggle the filter
    this.setState({charClassFilters: filters});
  }

  clearFilters() {
    let filters = this.state.charClassFilters;
    for(let k in filters) {
      filters[k] = false;
    }
    this.setState({charClassFilters: filters});
  }

  allCharClasses() {
    let filters = this.state.charClassFilters;
    for(let k in filters) {
      filters[k] = true;
    }
    this.setState({charClassFilters: filters});
  }

  render() {
    const th = (header, index) => {
      return (<th key={index}>{header}</th>)
    };

    let headers = [
      "Spell",
      "Level",
      "School",
      "Casting Classes"
    ];
    headers = headers.map(th);


    let filters = this.state.charClassFilters;
    let spells = filterSpellsByCharClass(this.state.spells, filters);

    const rows = spells.map(SpellRow);

    return (
      <section id="Spells">
        <h2>Spells</h2>
        <h5 className="text-primary">
          Filter list
          <button type="button" className="btn btn-link btn-sm" onClick={this.clearFilters}>[clear]</button>
          <button type="button" className="btn btn-link btn-sm" onClick={this.allCharClasses}>[all]</button>
        </h5>
        <form className="">
          <IconCheckBox onChange={this.toggleFilter} isActive={filters["bard"]} charClass="bard" />
          <IconCheckBox onChange={this.toggleFilter} isActive={filters["cleric"]} charClass="cleric" />
          <IconCheckBox onChange={this.toggleFilter} isActive={filters["druid"]} charClass="druid" />
          <IconCheckBox onChange={this.toggleFilter} isActive={filters["monk"]} charClass="monk" />
          <IconCheckBox onChange={this.toggleFilter} isActive={filters["paladin"]} charClass="paladin" />
          <IconCheckBox onChange={this.toggleFilter} isActive={filters["ranger"]} charClass="ranger" />
          <IconCheckBox onChange={this.toggleFilter} isActive={filters["sorcerer"]} charClass="sorcerer" />
          <IconCheckBox onChange={this.toggleFilter} isActive={filters["warlock"]} charClass="warlock" />
          <IconCheckBox onChange={this.toggleFilter} isActive={filters["wizard"]} charClass="wizard" />
        </form>

        <table className="table table-hover table-sm">
          <thead><tr>{headers}</tr></thead>
          <tbody>{rows}</tbody>
        </table>

      </section>
    )
  }
}


function filterSpellsByCharClass(spells, classes) {
  let t = [];
  function isActive(spellCasters) {
    for(let i = 0; i < spellCasters.length; i++) {
      let charClass = spellCasters[i].toLowerCase();
      if(classes[charClass]) {
        return true;
      }
    }
    return false;
  }

  for(let i = 0; i < spells.length; i++) {
    const spell = spells[i];
    const spellCasters = spell["class"].split(", ");
    if(isActive(spellCasters)) {
      t.push(spell);
    }
  }
  return t;
}



function IconCheckBox(props) {
  function toggle() {
    props.onChange(props.charClass);
  }

  return (
    <span key={`toggle_${props.charClass}`} className="form-check form-check-inline">
      <input className="form-check-input"
        type="checkbox"
        checked={props.isActive}
        onChange={toggle} />
      <ClassIcon charClass={props.charClass} /> {props.charClass}
    </span>
  )
}

function SpellRow(spell) {

  const check = (casterClass) => {
    const spellCasters = spell["class"].split(", ");
    if (_.includes(spellCasters, casterClass)) {
      return <abbr title={casterClass}><ClassIcon charClass={casterClass.toLowerCase()} /></abbr>;
    }
    return null;
  }

  const level = spell.level_int || "C";
  return (

    <tr key={spell._id}>
      <td><Link to="/spells/detail">{spell.name}</Link></td>
      <td>{level}</td>
      <td>{spell.school}</td>
      <td>
        {check("Bard")}
        {check("Cleric")}
        {check("Druid")}
        {check("Paladin")}
        {check("Ranger")}
        {check("Sorcerer")}
        {check("Warlock")}
        {check("Wizard")}
      </td>
    </tr>
  );
}


function SpellDetail(props) {
  return (
    <section className="SpellDetail">
      <div className="alert alert-warning">
        This screen shows the full spell data, with buttons
        to add or remove to any of the user's colllections.
      </div>
      <img className="img-fluid" src={details} alt="wireframe of spell detail screen" />
    </section>
  )
}


export { SpellTable, SpellDetail };
