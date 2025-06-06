<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TeamCategory extends Model
{
    /** @use HasFactory<\Database\Factories\TeamCategoryFactory> */
    use HasFactory;

    protected $guarded = [];
    public function created_by()
    {
        return $this->belongsTo(User::class, 'created_by', 'id');
    }
    public function updated_by()
    {
        return $this->belongsTo(User::class, 'updated_by', 'id');
    }

    public function teams()
    {
        return $this->hasMany(Team::class, 'category_code', 'code');
    }
}
