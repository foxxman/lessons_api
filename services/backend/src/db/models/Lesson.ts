import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm';
import { Student } from './Student';
import { Teacher } from './Teacher';

@Entity('lesson')
export class Lesson {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id!: number;

  @Column({ type: 'date' })
  date!: Date;

  @Column('varchar', { name: 'title', length: 255 })
  title!: string;

  @Column({ type: 'boolean' })
  status!: boolean;

  @ManyToMany(
    () => Student,
    student => student.lessons,
    {onDelete: 'NO ACTION', onUpdate: 'NO ACTION',},
  )
  students?: Student[];

  @ManyToMany(
    () => Teacher,
    teacher => teacher.lessons,
    {onDelete: 'NO ACTION', onUpdate: 'NO ACTION',},
  )
  teachers?: Teacher[];
}