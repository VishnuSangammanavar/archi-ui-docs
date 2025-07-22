"use client"

import React, { useState } from 'react'
import { Accordion, AccordionDetails, AccordionSummary, Typography } from 'elementx'

const ControlledAccordion = () => {

  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  }

  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <Accordion id='panel1' expanded={expanded === 'panel1'} onValueChange={handleChange('panel1')}>
        <AccordionSummary>
          <Typography component='span'>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor animi harum error amet porro fugiat obcaecati molestias similique veniam aliquam commodi, quae et atque voluptas exercitationem repellat soluta? Repudiandae, repellendus?</AccordionDetails>
      </Accordion>
      <Accordion id='panel2'  expanded={expanded === 'panel2'} onValueChange={handleChange('panel2')}>
        <AccordionSummary>
          <Typography component='span'>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor animi harum error amet porro fugiat obcaecati molestias similique veniam aliquam commodi, quae et atque voluptas exercitationem repellat soluta? Repudiandae, repellendus?</AccordionDetails>
      </Accordion>
      <Accordion id='panel3' expanded={expanded === 'panel3'} onValueChange={handleChange('panel3')}>
        <AccordionSummary>
          <Typography component='span'>Accordion 3</Typography>
        </AccordionSummary>
        <AccordionDetails>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor animi harum error amet porro fugiat obcaecati molestias similique veniam aliquam commodi, quae et atque voluptas exercitationem repellat soluta? Repudiandae, repellendus?</AccordionDetails>
      </Accordion>
    </div>
  )
}

export default ControlledAccordion
