import React from 'react'
import { Accordion, AccordionActions, AccordionDetails, AccordionSummary, Button, Typography } from 'elementx'

const BasicAccordion = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <Accordion>
        <AccordionSummary>
          <Typography component='span'>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor animi harum error amet porro fugiat obcaecati molestias similique veniam aliquam commodi, quae et atque voluptas exercitationem repellat soluta? Repudiandae, repellendus?</AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary>
          <Typography component='span'>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor animi harum error amet porro fugiat obcaecati molestias similique veniam aliquam commodi, quae et atque voluptas exercitationem repellat soluta? Repudiandae, repellendus?</AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary>
          <Typography component='span'>Accordion with actions</Typography>
        </AccordionSummary>
        <AccordionDetails>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor animi harum error amet porro fugiat obcaecati molestias similique veniam aliquam commodi, quae et atque voluptas exercitationem repellat soluta? Repudiandae, repellendus?</AccordionDetails>
        <AccordionActions>
          <Button>Cancel</Button>
          <Button>Agree</Button>
        </AccordionActions>
      </Accordion>
    </div>
  )
}

export default BasicAccordion
