interface IPaciente{

    addMedico(medico: IMedico);
    removeMedico(idMedico: string);
    getDiagnostico(): string;
    getId(): string;
    getMedicos(): Map<string, IMedico>
    removeMedico();
}

class Paciente implements IPaciente{

   private diagnostico: string;
   private medicos: Map<string, IMedico>
   private sender: string;

   constructor(){
    this.medicos = new Map()
   }
   
   Paciente(sender: string, diagnostico: string){

   }

   addMedico(medico: IMedico){
    this.diagnostico.set(medico, new IPaciente(medico))
   }

   let 
}

interface IMedico{

}

class Medico implements IMedico{
    private classe: string;
    private pacientes: Map<string, IPaciente>

    constructor(){
        this.pacientes = new Map()
    }
}

class Hospital{
    private pacientes: Map<string, IPaciente>
    private medicos: Map<string, IMedico>

    constructor(){
        this.pacientes = new Map()
        this.medicos = new Map()
    }
}