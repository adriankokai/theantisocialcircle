import React, { Component } from 'react'
import Package from './Package'

export class Packages extends Component {
    render() {
        return (
            <div className="row">
                <Package 
                    name="* Basic *"
                    line1="RTGS250"
                    line2="25% ticket discount"
                    line3="Own chill spot"
                    line4="-"
                    line5="-"
                    selected={this.props.package === "* Basic *" ? true : false}
                    key={1}
                    select={this.props.select}
                />
                <Package 
                    name="* Standard *"
                    line1="RTGS500"
                    line2="25% ticket discount"
                    line3="Own chill spot"
                    line4="Invitation to all events"
                    line5="-"
                    key={2}
                    selected={this.props.package === "* Standard *" ? true : false}
                    select={this.props.select}
                />
                <Package 
                    name="* Premium *"
                    line1="RTGS100"
                    line2="75% ticket discount for 2"
                    line3="50% Merchendise Discount"
                    line4="Own chill spot"
                    line5="Invitation to all events"
                    Line6="One free meal + drinks"
                    key={3}
                    selected={this.props.package === "* Premium *" ? true : false}
                    select={this.props.select}
                />
                <Package 
                    name="* Platinum *" 
                    line1="RTGS1500"
                    line2="Free Merchandise"
                    line3="Own chill spot"
                    line4="Invitation to all events"
                    line5="Free entry to all events with +1"
                    line6="Auto VIP ticket"
                    line7="1 bottle,6ack, and food, etc"
                    key={4}
                    selected={this.props.package === "* Platinum *" ? true : false}
                    select={this.props.select}
                />
                <Package 
                    name="* Diamond *"
                    line1="2500rtgs"
                    line2="Own chill spot"
                    line3="Invitation to all events"
                    line4="Free Merchandise"
                    line5="A Seat at The Social Table"
                    line6="Free Shuttle services"
                    line7="Auto VIP ticket with +1"
                    line8="Free entry to all events with +1"
                    line9='1 bottle, 6ack, and food, etc'
                    key={5}
                    selected={this.props.package === "* Diamond *" ? true : false}
                    select={this.props.select}
                />
            </div>
        )
    }
}

export default Packages
