// script.js (parte corregida)
const certificateHTML = `
    <div class="certificado-container">
        <div class="certificado-header">
            <h1>REGISTRO Y CONTROL ${certificateData.institution_short_name}</h1>
            <p>LICENCIA DE FUNCIONAMIENTO DE LA SECRETARÍA DE EDUCACIÓN</p>
            <p>DEL MUNICIPIO DE ${certificateData.municipio} ${certificateData.license_number} DE ${certificateData.license_date}</p>
            <p>RESOLUCIÓN OFICIAL DEL PROGRAMA ${certificateData.resolution_number} DE ${certificateData.resolution_date}</p>
            <p>NIT. ${certificateData.nit}</p>
            <p>${certificateData.location}, ${certificateData.current_date}</p>
        </div>
        
        <div class="certificado-content">
            <p class="certifica-text"><strong>LA JEFE DE REGISTRO Y CONTROL</strong></p>
            <p class="certifica-text"><strong>CERTIFICA:</strong></p>
            
            <p class="main-text">Que <strong>${certificateData.student_name}</strong>, identificado con documento número 
            <strong>${certificateData.document_number}</strong>, para el período <strong>${certificateData.period}</strong> se encuentra cursando 
            el <strong>${certificateData.module_number} de ${certificateData.total_modules}</strong> módulos académicos, correspondientes al programa 
            <strong>${certificateData.program_name}</strong>, con una intensidad del período de <strong>${certificateData.hours} horas</strong> 
            teórico-prácticas para un total del programa de <strong>${certificateData.total_hours} horas</strong>.</p>
            
            <p class="main-text">La fecha de inicio para el semestre <strong>${certificateData.period}</strong> pactada por la Institución es para el 
            <strong>${certificateData.start_date}</strong> y la fecha de finalización del semestre es para el <strong>${certificateData.end_date}</strong>.</p>
            
            <p class="legal-text">De acuerdo con la Ley 115 de 1994 y el Decreto 1075 de 2015, ${certificateData.institution_name} es una Institución
            de Educación para el Trabajo y el Desarrollo Humano.</p>
            
            <p class="solicitud-text">Este certificado se expide por Solicitud del Interesado.</p>
        </div>
        
        <div class="certificado-footer">
            <div class="signature-box">
                <div class="signature-line">${certificateData.signature_name}</div>
                <p>Jefe de Registro y Control</p>
                <p>C.C. ${certificateData.signature_id}</p>
            </div>
        </div>
        
        <div class="institution-info">
            <p>${certificateData.contact_person} ${certificateData.contact_phone}</p>
            <p>${certificateData.institution_url}</p>
            <p>${certificateData.institution_address}</p>
            <p>${certificateData.institution_location}</p>
        </div>
    </div>
`;